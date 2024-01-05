# Django Setup

## Initialization

1. Create repo and clone
2. Create virtual environment
python -m venv .venv

3. Start virtual environment
Linux: source .venv/bin/activate
Windows: .venv/Scripts/activate

4. Add gitignore, README.md
5. Install dependencies:
pip install django
pip install django-environ
pip install djangorestframework
pip install pip install psycopg2-binary
pip install djangorestframework_simplejwt
pip install --upgrade pip wheel
pip install httpie
pip install gunicorn
pip install whitenoise
pip install django-compressor
npm install -D tailwindcss
npm install flowbite

6. pip freeze > requirements.txt

## Create Project

1. Create Django project (must include . at end): django-admin startproject project_name .
2. Start server and check install: python manage.py runserver (ignore migration message)

## Install Django Environment

1. pip install django-environ

2. Add .env file to PROJECT, not root folder.  Add .env.sample

```pseudo
DEBUG=True
SECRET_KEY=django-insecure-*g*-qc2)=%9(vy*!=6x46vwjvef!qzlgicp3pg)=h+-=ssr-)0 REPLACE THIS WITH YOUR KEY, no quotes
ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0,.vercel.app
```

3. Add to settings.py

```pseudo

import environ
from pathlib import Path

# ENV setup
env = environ.Env(
    DEBUG=(bool, False),
)
environ.Env.read_env()

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('DEBUG')

ALLOWED_HOSTS = tuple(env.list('ALLOWED_HOSTS'))
```

4. Start server and test webpage to ensure .env is loaded.  python manage.py runserver

## Docker

1. touch docker-compose.yml

```pseudo
version: '3'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
```

2. touch Dockerfile

```psuedo
FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

```

3. docker compose up

4 Build docker container and run: docker compose up --build

5. For windows, browse to localhost:8000, not 0.0.0.0:8000

## gunicorn / whitenoise

1. pip install gunicorn
2. pip install whitenoise
3. Add to settings.py

```pseudo
INSTALLED_APPS = [
    # 3rd party
    'whitenoise',
]

MIDDLEWARE = [
    "whitenoise.middleware.WhiteNoiseMiddleware",
    # Add to top of list above everything else, but below django.middleware.security.SecurityMiddleWare if using
]


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / "staticfiles"

```

3. pip freeze > requirements.txt
4. Modify docker-compose.yml

```pseudo
services:
  web:
    build: .
    command: gunicorn project.wsgi:application --bind 0.0.0.0:8000 --workers 4
    # modify for project name

```

5. docker compose run web python manage.py collectstatic

6. docker compose up --build

## Default Users Database

Do this OR Customer Users

- Update Django: python manage.py migrate
- Create superuser named 'admin': python manage.py createsuperuser

## Custom Users Database

1. Create app called accounts: python manage.py startapp accounts
2. Update settings.py

```pseudo
INSTALLED_APPS = [
    'accounts',
]

# Custom User Model
AUTH_USER_MODEL = "accounts.CustomUser"
```

3. Update accounts/models.py with new CustomUser class

```pseudo
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.username

```

4. Create accounts/forms.py

```pseudo
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("username", "email")

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("username", "email")

```

5. Update accounts/admin.py

```pseudo
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]

admin.site.register(CustomUser, CustomUserAdmin)
```

6. python manage.py makemigrations

7. python manage.py migrate

[Migrations exception](https://stackoverflow.com/questions/44651760/django-db-migrations-exceptions-inconsistentmigrationhistory)

8. Create superuser named 'admin': python manage.py createsuperuser

9. Test accounts.  Run server, go to admin, login as admin.

## Postgres with Docker Volume

1. pip install pip install psycopg2-binary
2. pip freeze > requirements.txt
3. Create .env in ROOT

```pseudo
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

```

4. Modify project/.env

```pseudo
DATABASE_NAME=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
```

5. Modify docker-compose.yml to point to postgres database

```pseudo
version: '3'

services:
  web:
    build: .
#    command: gunicorn project.wsgi:application --bind 0.0.0.0:8000 --workers 4
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
  db:
    image: postgres
    restart: always
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - dbdata:/var/lib/postgresql/data

volumes:
  dbdata:

```

6. Modify settings.py

```pseudo
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DATABASE_NAME'),
        'USER': env('DATABASE_USER'),
        'PASSWORD': env('DATABASE_PASSWORD'),
        'HOST': env('DATABASE_HOST'),
        'PORT': env('DATABASE_PORT'),
    }
}

```

7. Start docker: docker compose up --build
8. With docker running, open new terminal
9. docker compose run web python manage.py migrate
10. docker compose run web python manage.py createsuperuser

## Postgres with ElephantSQL

1. Create instance <https://customer.elephantsql.com/instance>
2. Modify docker-compose.yml to delete any mention of local database

```pseudo
version: '3'

services:
  web:
    build: .
    command: gunicorn project.wsgi:application --bind 0.0.0.0:8000 --workers 4
    volumes:
      - .:/code
    ports:
      - "8000:8000"
```

3. Modify settings.py

```pseudo
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DATABASE_NAME'),
        'USER': env('DATABASE_USER'),
        'PASSWORD': env('DATABASE_PASSWORD'),
        'HOST': env('DATABASE_HOST'),
        'PORT': env('DATABASE_PORT'),
    }
}
```

4. Modify project/.env file

```pseudo
# Postgres SQL Database
DATABASE_NAME=kodbcmjq
DATABASE_USER=kodbcmjq
DATABASE_PASSWORD=t3mTB0Rl32NWXPAfbRWEPb5Absd9UFar
DATABASE_HOST=mahmud.db.elephantsql.com
DATABASE_PORT=5432

```

5. Start docker: docker compose up --build
6. With docker running, open new terminal
7. docker compose run web python manage.py migrate
8. docker compose run web python manage.py createsuperuser

## Create App

1. Create app: python manage.py startapp app_name
2. Add app to project in settings.py.

```pseudo
INSTALLED_APPS = [
    'app_name',
]
```

## Create models

1. in APP/models.py, create class models

``` pseudo
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

class Prospect(models.Model):
    name = models.CharField(max_length=64)
    school = models.CharField(max_length=64)
    position = models.CharField(max_length=64)
    report = models.URLField()
    scout = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('prospect_detail', args=[str(self.id)])


```

2. Register model with APP/admin.py

```pseudo

from django.contrib import admin
from .models import Prospect

admin.site.register(Prospect)

```

3. Check model structure: python manage.py makemigrations
4. Make the table in database: python manage.py migrate
5. Test database by adding something

## Create Serializer

```pseudo code
from rest_framework import serializers
from .models import Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"

    def limit_queryset(self, queryset):
        return queryset[:100]
```

## Create VIEWS

1. Create class definitions that point to html files

```pseudo
class HomePageView(TemplateView):
    template_name = 'home.html' # points to html file

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fruits"] = ['apple', 'banana', 'peach'] # data that's being used
        return context

class AboutPageView(TemplateView):
    template_name = 'about.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["characteristics"] = ['awesome', 'dapper', 'heroic']
        return context


```

## Create URLs

1. in PROJECT urls.py, point to APP urls.py

```pseudo
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework_simplejwt import views as jwt_views
from .views import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),

    # Redirect URL
    path('', lambda req: redirect('api/v1/job_data/')),

    # Login Endpoint
    path('api-auth', include("rest_framework.urls")),

    # Users Endpoint
    path('api/v1/users/', include('user_profile.urls')),

    # Job Data Endpoint
    path('api/v1/job_data/', include('job_data.urls')),

    # Skills Endpoint
    path('api/v1/skills/', include('skills.urls')),

    # Cost of Living Endpoint
    path('api/v1/col/', include('col.urls')),

    # JWT URLS
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

```

2. in APP urls.py, point to VIEWS

```pseudo
from django.urls import path
from .views import RosterList, RosterDetail

urlpatterns = [
    path('', RosterList.as_view(), name='roster_list'),
    path('<int:pk>', RosterDetail.as_view(), name='roster_detail'),
]
```

## Django Rest Framework

1. pip install djangorestframework
2. Add it to settings.py

```pseudo
INSTALLED_APPS = [
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.AllowAny',
        'rest_framework.permissions.IsAuthenticated',
    ]
}

```

3. PROJECT urls.py,

```pseudo
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/app/', include('app.urls')),
    path('api-auth', include("rest_framework.urls")),
    path('', lambda req: redirect('api/v1/app/')),
]
```

4. Test API

## JWT / httpie

1. pip install djangorestframework_simplejwt
2. pip install --upgrade pip wheel
3. pip install httpie
4. pip freeze > requirements.txt
5. Update settings.py

```pseudo
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.AllowAny',
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

```

6. Update project urls.py

```pseudo
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/app/', include('app.urls')),
    path('api-auth', include("rest_framework.urls")),
    path('', lambda req: redirect('api/v1/app/')),
    path('api/token/',jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

```

7. Get a token: http post localhost:8000/api/token/ username=admin password=YOUR_PASSWORD
8. Refresh token: http post localhost:8000/api/refresh/ refresh=REFRESH_TOKEN_HERE
9. Test token: http localhost:8000/api/v1/app/ "Authorization: Bearer ACCESS_TOKEN_HERE"

## Create Templates (i.e. html files)

1. Create templates folder in repo root.  Point PROJECT to APP templates

```pseudo
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

2. Create base template with header / footer

{% comment %}

```pseudo
{% load compress %}
{% load static %}

<!DOCTYPE html>
<html lang="en" class = 'dark'>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mike's first django site</title>

    <!-- Tailwind CSS stuff -->
    {% compress css %}
      <link rel="stylesheet" href="{% static 'src/output.css' %}">
    {% endcompress %}
</head>

<header>
    <nav>
        <!-- references link using name from urls.py      -->
        <a href="{% url 'home' %}">Home</a>
        <a href="{% url 'about' %}">About</a>
    </nav>
</header>

<body>

<!-- Default content, can be overridden by other files -->
{% block content %}
    <h1>Forgot content</h1>
{% endblock content %}

</body>

```

{% endcomment %}

3. Create html file, using base template
{% comment %}

```pseudo
<!-- import in base template -->
{% extends 'base.html' %}

<!-- replaces 'content' in base.html with this 'content' -->
{% block content %}
    <h1 class="text-3xl text-green-800">Home Page Django</h1>
    {% for fruit in fruits %}
        <p> I like {{fruit}}.</p>

    {% endfor %}
{% endblock content %}
{% endcomment %}


```

## Install TailwindCSS (if using)

1. Install Django compressor: pip install django-compressor
2. Add to settings.py

```pseudo
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'snacks',
    'compressor',
]

# Add to end of file:
COMPRESS_ROOT = BASE_DIR / 'static'
COMPRESS_ENABLED = True
STATICFILES_FINDERS = ('compressor.finders.CompressorFinder',)
```

3. Install TailwindCSS: npm install -D tailwindcss
4. npx tailwindcss init
5. Add templates to tailwindcss.config.js

```pseudo
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './templates/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. Build static/src/input.css

```pseudo
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Build output.css: npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch

## Install Flowbite for Tailwind components (if using)

1. npm install flowbite
2. Add to tailwind.config.js

```pseudo
module.exports = {
  darkMode: 'class',
  content: [
    './templates/*.html',
    './node_modules/flowbite/*.js'
  ],

```

## Create tests in app tests.py

1. Create tests in APP tests.py
2. Run tests: python manage.py test

## docker terminal

docker exec -it test2-web-1 bash

## Deploy to vercel

1. Create vercel.json file.  Modify project name

```pseudo
{
  "builds": [
    {
      "src": "Tech_Relocator_Project/wsgi.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "Tech_Relocator_Project/wsgi.py"
    }
  ]
}

```

2. Edit project/wsgi.py  Add app = application

```pseudo
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Tech_Relocator_Project.settings')

application = get_wsgi_application()
app = application
```
