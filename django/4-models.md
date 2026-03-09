# Models

- Models are classes that define the structure of the data in the database
- Each model is a table in the database
- Each attribute of the model is a column in the table

1. Define the model

::: code-group

```py [app_name/models.py]
from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()

```

:::

| id  | title   | release_date |
| --- | ------- | ------------ |
| 1   | Movie 1 | 2020-01-01   |
| 2   | Movie 2 | 2020-01-02   |

```py [app_name/views.py]


```

2. make migrations and migrate

- `makemigrations` creates instructions telling Django how the db have changed
- `migrate` applies the migrations changes to the database

```sh
python manage.py makemigrations
python manage.py migrate
```

## Interacting with the database

```py [app_name/views.py]
from app_name.models import Movie

Movie.objects.all() # Get all movies
Movie.objects.create(title="Movie 1", release_date="2020-01-01") # Create a movie
Movie.objects.get(id=1) # Get a movie
Movie.objects.filter(title="Movie 1") # Filter movies
Movie.objects.update(title="Movie 1") # Update movies
Movie.objects.delete() # Delete movies
```

### Using the shell

```sh
python manage.py shell
```

```py
from app_name.models import Movie

Movie.objects.all()
```

## Filter

```py [app_name/views.py]
from django.http import HttpResponse
from .models import Movie

def index(request):
    movies = Movie.objects.filter(is_released=True)
    return HttpResponse(movies)
```

## Humanize App

- Humanize app is a django app that provides template filters and tags to make your templates more human-friendly
- Install it with `pip install django-humanize`
- [django-humanize](https://docs.djangoproject.com/fr/5.1/ref/contrib/humanize/)

```py [config/settings.py]
INSTALLED_APPS = [
    "django.contrib.admin",
    "...",
    "django.contrib.humanize", # [!code ++]
]
```

```html [app_name/templates/app_name/index.html]
{% load humanize %} {{ title|title }} {{ description|truncatechars:50 }} {{
release_date|date:"d/m/Y" }}
```

## Detail View

::: code-group

```py [app_name/views.py]
def detail(request, movie_id):
    movie = Movie.objects.get(id=movie_id)
    return HttpResponse(movie)
```

```py [app_name/urls.py]
from .views import index, detail # [!code ++]

urlpatterns = [
    path('', index, name="home"),
    path('movie/<int:movie_id>/', detail, name="detail"), # [!code ++]
]
```

```html [app_name/templates/app_name/detail.html]
{% load humanize %} {{ movie.title }} {{ movie.release_date|date:"d/m/Y" }}
```

:::

## 404 Error

::: code-group

```py [app_name/views.py]
from django.shortcuts import get_object_or_404
from .models import Movie
from django.shortcuts import render

def detail(request, movie_id):
    movie = get_object_or_404(Movie, id=movie_id, is_released=True)
    context = {
        "movie": movie
    }
    return render(request, "app_name/detail.html", context)
```

```py [app_name/urls.py]
from .views import index, detail # [!code ++]

urlpatterns = [
    path('', index, name="home"),
    path('movie/<int:movie_id>/', detail, name="detail"), # [!code ++]
]
```

```html [app_name/templates/app_name/detail.html]
{% load humanize %} {{ movie.title }} {{ movie.release_date|date:"d/m/Y" }}
```

:::
