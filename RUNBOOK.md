# RUNBOOK

## Purpose

This runbook provides troubleshooting procedures for common operational issues encountered while running the Ian Lagat Capstone application on Amazon EKS.

---

# Environment Information

Cluster

```
capstone
```

Namespace

```
ian-lagat
```

AWS Region

```
eu-west-1
```

---

# Health Check Commands

View Nodes

```bash
kubectl get nodes
```

View Pods

```bash
kubectl get pods -n ian-lagat
```

View Services

```bash
kubectl get svc -n ian-lagat
```

View Deployments

```bash
kubectl get deployments -n ian-lagat
```

View Events

```bash
kubectl get events -n ian-lagat
```

---

# Issue 1 – Pod CrashLoopBackOff

Symptoms

```
STATUS

CrashLoopBackOff
```

Diagnosis

```bash
kubectl describe pod <pod-name> -n ian-lagat
```

Check logs

```bash
kubectl logs <pod-name> -n ian-lagat
```

Common Causes

- Application startup failure
- Missing environment variables
- Missing ConfigMap
- Missing Secret
- Database connection failure

Resolution

Restart Deployment

```bash
kubectl rollout restart deployment/backend -n ian-lagat
```

---

# Issue 2 – InvalidImageName

Symptoms

```
InvalidImageName
```

Diagnosis

```bash
kubectl describe pod <pod-name> -n ian-lagat
```

Verify deployment image

```bash
kubectl get deployment backend \
-n ian-lagat \
-o=jsonpath='{.spec.template.spec.containers[0].image}'
```

Resolution

- Verify AWS Account ID
- Verify repository name
- Verify image tag
- Reapply deployment

---

# Issue 3 – ImagePullBackOff

Symptoms

```
ImagePullBackOff
```

Possible Causes

- Image does not exist
- Wrong image tag
- ECR authentication failure
- IAM permission issue

Verification

```bash
aws ecr list-images \
--repository-name ian-lagat/backend \
--region eu-west-1
```

---

# Issue 4 – Service Not Reachable

Diagnosis

```bash
kubectl get svc -n ian-lagat
```

Check endpoints

```bash
kubectl get endpoints -n ian-lagat
```

Verify labels

```bash
kubectl describe service backend-service -n ian-lagat
```

---

# Issue 5 – High Application Latency

Possible Causes

- CPU throttling
- Memory exhaustion
- Network congestion
- Large application load

Diagnosis

```bash
kubectl top pods -n ian-lagat
```

```bash
kubectl describe pod <pod-name>
```

Resolution

- Increase CPU limits
- Increase memory limits
- Scale deployment

Example

```bash
kubectl scale deployment backend \
--replicas=4 \
-n ian-lagat
```

---

# Issue 6 – Pods Pending

Diagnosis

```bash
kubectl describe pod <pod-name>
```

Possible Causes

- No available nodes
- PVC not bound
- Resource limits exceeded

---

# Issue 7 – ConfigMap Missing

Diagnosis

```bash
kubectl get configmap -n ian-lagat
```

Recreate

```bash
kubectl apply -f k8s/configmap.yaml
```

---

# Issue 8 – Secret Missing

Diagnosis

```bash
kubectl get secrets -n ian-lagat
```

Recreate

```bash
kubectl apply -f k8s/secret.yaml
```

---

# Issue 9 – PVC Pending

Diagnosis

```bash
kubectl get pvc -n ian-lagat
```

Describe

```bash
kubectl describe pvc backend-storage -n ian-lagat
```

Possible Causes

- StorageClass unavailable
- EBS CSI Driver missing

---

# Issue 10 – Deployment Rollback

View rollout history

```bash
kubectl rollout history deployment/backend \
-n ian-lagat
```

Rollback

```bash
kubectl rollout undo deployment/backend \
-n ian-lagat
```

---

# Issue 11 – GitHub Actions Failure

Check

- GitHub Actions Logs
- AWS Credentials
- GitHub Secrets
- Docker Build Logs
- ECR Login Step

Required Secrets

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_ACCOUNT_ID
AWS_REGION
BACKEND_REPOSITORY
FRONTEND_REPOSITORY
```

---

# Useful Operational Commands

Restart Backend

```bash
kubectl rollout restart deployment/backend \
-n ian-lagat
```

Restart Frontend

```bash
kubectl rollout restart deployment/frontend \
-n ian-lagat
```

Delete Pod

```bash
kubectl delete pod <pod-name> \
-n ian-lagat
```

View Logs

```bash
kubectl logs <pod-name> \
-n ian-lagat
```

Open Shell

```bash
kubectl exec -it <pod-name> \
-n ian-lagat -- sh
```

Watch Pods

```bash
kubectl get pods -w \
-n ian-lagat
```

---

# Disaster Recovery

1. Verify cluster health.
2. Verify node availability.
3. Verify ECR images.
4. Reapply Kubernetes manifests.
5. Restart deployments.
6. Validate application functionality.
7. Restore persistent data if required.
8. Confirm user access.

---

# Operational Contacts

Project Owner

Ian Lagat

Environment

Production (Amazon EKS)

Cloud Provider

Amazon Web Services (AWS)