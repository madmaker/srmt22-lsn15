#Исходный docker образ - основа
FROM php:8.1.10-fpm

# RUN выполняет команды: делает тоже самое, что мы вручную делаем в консоли, только автоматически.
# Пишется так: RUN и далее команда к выполнению
# Здесь мы устанавливаем модули и зависимости PHP.
# Модули PHP устанавливаются командой docker-php-ext-install.
# Каждый RUN создает новый слой в образе. Команды RUN рекомендуется объединиять - для этого символ \ (бэкслеш)
RUN apt-get update && apt-get install -y \
        curl \
        wget \
        git \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
	libpng-dev \
	libonig-dev \
	libzip-dev \
	libmcrypt-dev \
        && pecl install mcrypt-1.0.3 \
	&& docker-php-ext-enable mcrypt \
        && docker-php-ext-install -j$(nproc) iconv mbstring mysqli pdo_mysql zip \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
        && docker-php-ext-install -j$(nproc) gd

# Установка Composer
#RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Добавление своего php.ini
#ADD php.ini /usr/local/etc/php/conf.d/custom.ini

# Рабочая дерриктория  PHP
WORKDIR /var/www

# Запуск контейнера
# The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable,
# or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
CMD ["php-fpm"]