FROM python:3.10

WORKDIR /code

RUN pip install --upgrade pip
RUN pip install --upgrade virtualenv

ENV VIRTUAL_ENV=/code/.venv

#  create virtual environment 
RUN python3 -m venv $VIRTUAL_ENV

ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# copy requirements.txt to /code/requirements.txt
COPY ./requirements.txt /code/requirements.txt

# install dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

