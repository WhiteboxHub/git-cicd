pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'remote123/whiteboxlearning'  // Docker Hub repository
        TAG_NAME = 'git-cicd'                       // Tag for the image
    }
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository
                git 'https://github.com/WhiteboxHub/git-cicd.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image and tag it with the desired name
                    IMAGE_TAG = "${DOCKER_IMAGE}:${TAG_NAME}"
                    echo "Building Docker image: ${IMAGE_TAG}"
                    sh "docker build -t ${IMAGE_TAG} ."
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub and push the tagged image
                    withDockerRegistry([credentialsId: '121', url: 'https://index.docker.io/v1/'])
                        echo "Pushing Docker image: ${IMAGE_TAG}"
                        sh "docker push ${IMAGE_TAG}"
                    }
                }
            }
        }
    }
}
