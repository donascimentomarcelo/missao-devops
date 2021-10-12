#!/bin/sh

helm lint charts/backend-scm/
helm push charts/backend-scm/ questcode

helm lint charts/backend-user/
helm push charts/backend-user/ questcode

helm lint charts/frontend/
helm push charts/frontend/ questcode

helm repo update