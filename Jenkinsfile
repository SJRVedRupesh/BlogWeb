pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Stage') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Application deployed successfully.'
            }
        }
    }
}