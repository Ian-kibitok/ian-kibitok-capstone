# ian-kibitok-capstone

## Overview

This project demonstrates the deployment of a modern containerized web application using AWS cloud services and Kubernetes. It showcases DevOps best practices, including containerization, continuous integration and deployment (CI/CD), orchestration, configuration management, and cloud-native deployment.

The application consists of:

- Frontend: Static HTML/CSS/JavaScript served by NGINX
- Backend: FastAPI REST API
- Container Registry: Amazon Elastic Container Registry (Amazon ECR)
- Container Orchestration: Amazon Elastic Kubernetes Service (Amazon EKS)
- CI/CD: GitHub Actions
- Configuration Management: Kubernetes ConfigMaps and Secrets
- Persistent Storage: Kubernetes Persistent Volume Claims (PVC)
- Cloud Platform: Amazon Web Services (AWS)

---

# Project Architecture

```
                    GitHub Repository
                           │
                           ▼
                  GitHub Actions CI/CD
                           │
                           ▼
               Amazon Elastic Container Registry
               ┌───────────────────────────────┐
               │ Backend Image                 │
               │ Frontend Image                │
               └───────────────────────────────┘
                           │
                           ▼
                 Amazon EKS Cluster (capstone)
       ┌─────────────────────────────────────────────┐
       │ Namespace: ian-lagat                        │
       │                                             │
       │ Backend Deployment                          │
       │ Frontend Deployment                         │
       │ Services                                   │
       │ ConfigMaps                                 │
       │ Secrets                                    │
       │ Persistent Volume Claims                   │
       │ Ingress (Optional)                         │
       └─────────────────────────────────────────────┘
                           │
                           ▼
                    End Users / Browser
```

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| FastAPI | Backend API |
| HTML/CSS/JavaScript | Frontend |
| Docker | Containerization |
| Amazon ECR | Image Registry |
| Amazon EKS | Kubernetes Cluster |
| Kubernetes | Container Orchestration |
| GitHub Actions | CI/CD |
| AWS IAM | Authentication & Authorization |
| NGINX | Web Server |
| ConfigMaps | Configuration Management |
| Secrets | Sensitive Configuration |
| PVC | Persistent Storage |

---

# Project Structure

```
ian-kibitok-capstone/
│
├── backend/
│   ├── app/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── tests/
│
├── frontend/
│   ├── public/
│   ├── nginx/
│   ├── Dockerfile
│   └── package.json
│
├── k8s/
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── backend-pvc.yaml
│   ├── deployment-backend.yaml
│   ├── deployment-frontend.yaml
│   ├── service-backend.yaml
│   ├── service-frontend.yaml
│   └── ingress.yaml
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── README.md
└── RUNBOOK.md
```

---

# Prerequisites

Before running the project ensure the following are installed:

- Docker Desktop
- AWS CLI
- kubectl
- Git
- Visual Studio Code
- Helm (optional for AWS Load Balancer Controller)

---

# AWS Resources

AWS Region

```
eu-west-1
```

EKS Cluster

```
capstone
```

Namespace

```
ian-lagat
```

ECR Repositories

```
ian-lagat/backend
ian-lagat/frontend
```

---

# Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
https://github.com/Ian-kibitok/ian-kibitok-capstone.git
cd ian-kibitok-capstone
```

---

# Configure AWS

```bash
aws configure
```

Verify access

```bash
aws sts get-caller-identity
```

---

# Connect to EKS

```bash
aws eks update-kubeconfig \
--region eu-west-1 \
--name capstone
```

Verify

```bash
kubectl get nodes
```

---

# Build Docker Images

Backend

```bash
docker build -t backend ./backend
```

Frontend

```bash
docker build -t frontend ./frontend
```

---

# Push Images to Amazon ECR

Authenticate

```bash
aws ecr get-login-password \
--region eu-west-1 \
| docker login \
--username AWS \
--password-stdin <AWS_ACCOUNT_ID>.dkr.ecr.eu-west-1.amazonaws.com
```

Push images

```bash
docker push <AWS_ACCOUNT_ID>.dkr.ecr.eu-west-1.amazonaws.com/ian-lagat/backend:latest

docker push <AWS_ACCOUNT_ID>.dkr.ecr.eu-west-1.amazonaws.com/ian-lagat/frontend:latest
```

---

# Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

Verify

```bash
kubectl get all -n ian-lagat
```

---

# CI/CD

The project uses GitHub Actions to:

- Build Docker images
- Push images to Amazon ECR
- Deploy updates to Amazon EKS

Pipeline file

```
.github/workflows/ci-cd.yml
```

---

# Monitoring

Pods

```bash
kubectl get pods -n ian-lagat
```

Deployments

```bash
kubectl get deployments -n ian-lagat
```

Services

```bash
kubectl get svc -n ian-lagat
```

Logs

```bash
kubectl logs <pod-name> -n ian-lagat
```

---

# Future Improvements

- HTTPS using AWS Certificate Manager
- AWS Load Balancer Controller
- Amazon RDS instead of SQLite
- Monitoring using Prometheus and Grafana
- Centralized logging with CloudWatch
- Horizontal Pod Autoscaler
- Automated Security Scanning
- Terraform Infrastructure as Code

---

# Author

Ian Lagat

Software Developer | DevOps Engineer | Cybersecurity Specialist