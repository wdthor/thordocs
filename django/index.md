# Django - Intro

## Introduction

- Django uses the MVT (Model, View, Template) pattern

  - **View** contains the business logic, interacts with the **Model** (database), and returns an HTTP response often using a **Template** (html)

- It is common for a Django project to have multiple Django app which are responsible for different functionnality (check `settings.py` file)

## Commands

### Create an virtual env

- Use Git bash because it doesn't work with Powershell

```sh
python -m venv env

# Activate virtual env
source env/Scripts/activate
```

### Install and create a Django project

```sh
pip install django
django-admin startproject config .
```

## Create an app

```sh
python manage.py startapp <app_name>
```

- Add `app_name` inside `config/settings.py`

::: code-group

```py [config/settings.py]
INSTALLED_APPS = [
    "django.contrib.admin",
    "...",
    "my_app", # [!code ++]
]
```

:::

## Add new route

::: code-group

```py [app_name/views.py]
def index(request):
    return HttpResponse("index route")
```

```py [config/urls.py]
from movies.views import index # [!code ++]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('path_name/', index), # [!code ++]
]
```

:::

### Launch server

```sh
python manage.py runserver
```

## Add dynamic content

::: code-group

```py [app_name/views.py]
def hello(request, first_name):
    return HttpResponse(f"Hello {first_name}")
```

```py [config/urls.py]
from movies.views import hello # [!code ++]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/<str:first_name>/', hello), # [!code ++]
]
```

:::
