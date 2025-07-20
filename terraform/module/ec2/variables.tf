variable "ami_id" {
  description = "The AMI ID for the EC2 instance"
  type        = string
}

variable "instance_type" {
  description = "The type of EC2 instance to launch"
  type        = string
  default     = "t2.micro" # Optional: good default for free-tier or testing
}

variable "subnet_id" {
  description = "The Subnet ID to launch the instance in"
  type        = string
}

variable "key_name" {
  description = "The name of the key pair to use for the instance"
  type        = string
}

variable "security_group_id" {
  description = "The ID of the security group to attach to the instance"
  type        = string
}

variable "project_name" {
  description = "The name prefix to tag AWS resources"
  type        = string
}
