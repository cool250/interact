package com.interact.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.interact.dto.Response;
import com.opentok.OpenTok;
import com.opentok.Session;
import com.opentok.exception.OpenTokException;

@Controller
public class OTSessionController {

	@Resource
	private OpenTok openTok;

	@RequestMapping(value = "/session", method = RequestMethod.GET, produces = "application/json")
	public Response getOTSession() throws OpenTokException {
		Session session = openTok.createSession();
		Response response = new Response();
		response.setApiKey(1122334455);
		response.setSessionId(session.getSessionId());
		response.setToken(session.generateToken());
		return response;
	}

}
