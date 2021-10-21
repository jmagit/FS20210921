package com.example.domains.core;

import java.util.Set;

import javax.persistence.Transient;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class EntityBase<E> {
	private Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Transient
	@JsonIgnore
	public Set<ConstraintViolation<E>> getErrors() {
		return validator.validate((E) this);
	}
	
	@Transient
	@JsonIgnore
	public boolean isValid() {
		return getErrors().size() == 0;
	}
	
	@Transient
	@JsonIgnore
	public boolean isInvalid() {
		return !isValid();
	}
}
