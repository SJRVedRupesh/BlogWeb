pipeline {

```
agent any

stages {

    stage('Clone Repository') {
        steps {
            checkout scm
        }
    }

    stage('Install Dependencies') {
        steps {
            dir('src') {
                bat 'npm install'
            }
        }
    }

    stage('Build Stage') {
        steps {
            echo 'Application Build Completed'
        }
    }

    stage('Deploy Stage') {
        steps {
            echo 'Application Deployed Successfully'
        }
    }
}
```

}
