package com.interact.dto;

import java.io.Serializable;

public class Response implements Serializable {

	private static final long serialVersionUID = -4432407663043681690L;

	private int apiKey;
	private String sessionId;
	private String token;
	
	public int getApiKey() {
		return apiKey;
	}
	public void setApiKey(int apiKey) {
		this.apiKey = apiKey;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}
