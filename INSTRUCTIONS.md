## Environment set-up

In order to set up your environment so that you are able to run the code along with the tests, it's best to run first the following steps.

### Install node & npm

Linux
```
sudo apt install nodejs
```

Mac (via brew)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node
```

In order to check whether you installed them correctly, check using:
```
brew -v
node -v
npm -v
npx -v
```

### Install gulp

```
npm install --global gulp-cli
```

### Clone repository

```
git clone REPOURL
```

### Enter repo and install required packages

```
cd REPO
npm install
```

### Run tests

As the kata is test oriented, you should make sure that the jasmine test configuration is set properly. You can check that by running all the test files (*.spec.ts):

```
npm run test
```