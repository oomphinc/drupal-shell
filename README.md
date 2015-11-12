# drupal-shell
A starting point for Drupal sites

## Dependencies
- Drush 8.x
- npm

## Usage
### Download Drupal and base modules
```
drush make project.make.yml docroot
```
Don't worry, if a Drupal installation already exists, this command won't do anything.

### Install dependencies
```
npm install
```

### Run Gulp
```
gulp --develop
```
If you leave out `--develop` Gulp will prepare files for deployment.
