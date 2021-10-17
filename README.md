# RSRCS
RSRCS is a simple resource management application built with Laravel 8 and VueJS 2. There are 3 types of resources:
- PDF download
- HTML snippet
- Link

An administrator can add, edit or delete any of these resources while a visitor can download a PDF file, copy a HTML snippet to clipboard or open a Link in the same or a new tab.

## Installation
The project is available on Github [here](https://github.com/cjamanambu/rsrcs). To install, first clone the public repository:
```sh
git clone https://github.com/cjamanambu/rsrcs.git
```
When the cloning process is done, access the cloned directory:
```sh
cd rsrcs
```
Once inside the directory, install project dependencies with composer. Laravel uses Composer as a Dependency Manager, you can read more about it [here](https://getcomposer.org/). I used ```version 2.1.5``` of composer for this project so make sure you have it installed on your system and run:
```sh
composer install
```
The project requires a ```.env``` file to run. Copy the contents of the ```.env.example``` file that comes with the project to create your own copy:
```sh
cp .env.example .env
```
Next, we will set the application key for the project. It is usually a 32 character long string and is used to ensure that user sessions and encrypted data are kept secure. We will set it as a matter of best practise. Simply set it with:
```sh
php artisan key:generate
```

### Database Setup
The project requires a MySQL database running on port 3306. Ensure your database server is running and configure the project to connect to the database with your  ```.env``` file in the following lines:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
Once configured, create all the necessary tables in the database by running a database migration:
```sh
php artisan migrate
```
This will create the necessary tables for our resources:

| pdfs |  | | |
| ------ | ------ | ------ | ------ |
| | id | bigint(20) | auto increment |
| | title | varchar(255) | required |
| | file_name | varchar(255) | required |
| | file_path | text | required |
| | created_at | timestamp | |
| | updated_at | timestamp | |

| htmls |  | | |
| ------ | ------ | ------ | ------ |
| | id | bigint(20) | auto increment |
| | title | varchar(255) | required |
| | description | text | |
| | snippet | text | required |
| | created_at | timestamp | |
| | updated_at | timestamp | |

| links |  | | |
| ------ | ------ | ------ | ------ |
| | id | bigint(20) | auto increment |
| | title | varchar(255) | required |
| | link | varchar(255) | required |
| | new_tab | tinyint(1) | required |
| | created_at | timestamp | |
| | updated_at | timestamp | |

### Project Execution
Once the migrations are done, you can start Laravel's development server on your local machine to execute the project. Simply run the command:
```sh
php artisan serve
```
The development server will be run on `http://127.0.0.1:8000` or `http://localhost:8000` by default. If not, please update the `./resources/js/api.js` file and replace:
```js
export default 'http://localhost:8000/api/'
```
with the correct url. Access the app from `http://localhost:8000` in your browser.

### Feature Tests
The project has feature tests for both `ManagementController` and `VisitorController`. As of the time of the final commit, all tests are passing. You can run all test cases with:
```sh
php artisan test
```

## Technologies
The project uses Laravel 8 and scaffolds Bootsrap and Vue with `laravel/ui`. On the frontend, both Admin and Visitor ends are built with VueJS 2 and use the following libraries:

- [vue-prism](https://vue-prism.netlify.app/) - used to display HTML snippets with code formatting.
- [vue-axios](https://www.npmjs.com/package/vue-axios) - a small wrapper for integrating axios to VueJS for making api requests.
- [vue-clipboard2](https://www.npmjs.com/package/vue-clipboard2) - a simple VueJS 2 binding for clipboard.js for copying links to clipboard.
- [vue-sweetalert2](https://www.npmjs.com/package/vue-sweetalert2) - a VueJS wrapper for SweetAlert2 for nice action dialogs.
- [vue-toast-notification](https://www.npmjs.com/package/vue-toast-notification) - a VueJS toast notification plugin for showing nice notifications after certain actions.

## Project Requirements
In the Admin End of the project, a user can create a PDF resource with a title and a pdf file. Further, a user can create a HTML snippet with a title, an optional description and a HTML snippet. Also, a user can create a Link with a title, the link url and a choice to open the link in a new tab or not.  
In the Visitor End of the project, a user can view & download a PDF file, copy a HTML snippet and open a link in the same or new tab.
