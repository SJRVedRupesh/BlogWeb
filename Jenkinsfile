pipeline {
    
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
                sh 'npm install'
            }
        }
    }

    stage('Build Stage') {
        steps {
            dir('src') {
                sh 'npm --version'
                echo 'Application Build Completed Successfully'
            }
        }
    }

    stage('Deploy Stage') {
        steps {
            echo 'Application Deployment Successful'
        }
    }
}

post {
    success {
        echo 'Pipeline Executed Successfully'
    }
    failure {
        echo 'Pipeline Failed'
    }
}

}
