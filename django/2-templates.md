# Templates

## Working with template files

```py
{{ variable }} # Display variable

{% if condition %} # Execute tag
{% endif %}

{{ variable|filter }} # Apply filter
```

### Pass data to template

::: code-group

```py [app_name/views.py]
movies = {
  'movies': ['movie1', 'movie2', 'movie3']
}
def index(request):
    return HttpResponse('index route', movies)
```

```js [movies/templates/movies/index.html]
<body>
  <h1>My favorite movies</h1>
  {% if movies %}
    <ul>
      {%for movie in movies %}
        <li>{{ movie|title }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No favorite movies...</p>
  {% endif %}
</body>
```

:::

### Named Url

::: code-group

```py [config/urls.py]
from movies.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name="home"), # [!code ++]
]
```

```js [movies/templates/movies/index.html]
<a href="{% url 'home' %}">Home</a>
```

:::

### Template Inheritence

::: code-group

```js [movies/templates/movies/_base.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{% block title %}Default Title{% endblock %}</title>
  </head>
  <body>
    <div>
      <a href="{% url 'home' %}">Home</a>
    </div>
    {% block content %}
    {% endblock %}
  </body>
</html>
```

```js [movies/templates/movies/index.html]
{% extends 'movies/_base.html' %} // Display content from "_base.html"

{% block title %}My favorite movies{% endblock %} // This part will be injected inside the "block title" from "_base.html"

{% block content %} // This part will be injected inside the "block content" from "_base.html"
  <h1>My favorite movies</h1>
  {% if movies %}
    <ul>
      {%for movie in movies %}
        <li>{{ movie|title }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No favorite movies...</p>
  {% endif %}
{% endblock %}
```

:::

### Static files

- Static files (Css, JavaScript, images) are set inside `config/settings.py`
- If the images don't load, restart server

::: code-group

```py [config/settings.py]
STATIC_URL = 'static/'
```

```js [movies/templates/movies/index.html]
{% load static %}
<img src={% static 'folder_name/file_name.jpg' %} alt="" />
```

:::
