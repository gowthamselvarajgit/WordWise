variable "project_name" {
  description = "Name of the project used in naming AWS resources"
  type        = string
}

variable "vpc_id" {
  description = "The ID of the VPC where the security group will be created"
  type        = string
}

variable "ssh_ingress_cidr" {
  description = "CIDR block allowed to access SSH port (22)"
  type        = string
  default     = "0.0.0.0/0"
}

variable "http_ingress_cidr" {
  description = "CIDR block allowed to access HTTP ports (80, 8080)"
  type        = string
  default     = "0.0.0.0/0"
}

variable "mysql_ingress_cidr" {
  description = "CIDR block allowed to access MySQL port (3306)"
  type        = string
  default     = "10.0.0.0/16"
}
