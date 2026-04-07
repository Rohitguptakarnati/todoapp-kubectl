# Executable Commands for Cluster Setup (Windows PowerShell)

Since you are working on Windows, the easiest way to install these tools natively from PowerShell is by using `winget` (Windows Package Manager). 

**Important:** Please open a new **PowerShell** window **as Administrator** before running these commands to avoid permission prompt interruptions.

## 1. Install Git
```powershell
winget install --id Git.Git -e --source winget
```

## 2. Install Docker Desktop
```powershell
winget install --id Docker.DockerDesktop -e --source winget
```
*Note: After installation, Docker Desktop typically requires a system restart. It may also prompt you to install or update the WSL2 kernel.*

## 3. Install kubectl
```powershell
winget install --id Kubernetes.kubectl -e --source winget
```

## 4. Install Minikube
```powershell
winget install --id Kubernetes.minikube -e --source winget
```

## 5. Verify Installations and Start Minikube
Once all tools are installed (and you have restarted your computer/PowerShell if necessary):

```powershell
# Verify Git
git --version

# Verify Docker
docker --version

# Verify kubectl
kubectl version --client

# Verify Minikube
minikube version

# Start Minikube (Ensure Docker Desktop application is running first!)
minikube start --driver=docker
```
