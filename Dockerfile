FROM ruby:2.5
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    postgresql-client \
    yarn
WORKDIR /portfolio-app
COPY Gemfile Gemfile.lock /portfolio-app/
RUN bundle install