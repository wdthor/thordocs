# 1. FastApi Setup & Installation

## Python Virtual Environments

- A virtual environment is a Python environment that is isolated from those in other Python environments

## How to install dependencies

- Pip is the Python package manager
  - Pip is used to install and update packages
  - Pip is installed alongside Python

```sh
python -m pip --version
```

- Print packages install with pip

```sh
pip list
```

## Install venv

```sh
python -m venv <venv-name>
```

## Activate venv

```sh
<venv_name>/Scripts/activate
```

## Check if a virtual environment is active

```sh
Get-Command python
```

## Deactivate venv

```sh
deactivate
```

## [new-2024] Install fastapi

```sh
pip install "fastapi[standard]"
```

### Run fastapi server

```sh
fastapi dev ./main.py
```

## [old] Install fastapi & uvicorn

- uvicorn is a web server

```sh
pip install fastapi
pip install "uvicorn[standard]"
```

### Run uvicorn server

```sh
uvicorn <project-name>:app --reload
```
