using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace hackathon.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SomethingController : ControllerBase
	{
		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<string>> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			return $"value {id}";
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}

	[Route("a/[controller]")]
	[ApiController]
	public class SomeController : ControllerBase
	{
		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<string>> Get()
		{
			return new string[] { "valllllllue1", "vallllllue2" };
		}
	}

	[Route("[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		[HttpGet]
		public IActionResult Get([FromHeader]string googletoken)
		{

			if (googletoken != null)
			{
				return Ok(new { token = "googletoken", googletoken });
			}
			else
			{
				return BadRequest("Fuck you");
			}
		}
	}



	//[Route("api/[controller]")]
	//[ApiController]
	//public class TokenController : ApiController
	//{
	//	// This is naive endpoint for demo, it should use Basic authentication to provide token or POST request
	//	[AllowAnonymous]
	//	public string Get(string username, string password)
	//	{
	//		if (CheckUser(username, password))
	//		{
	//			return JwtManager.GenerateToken(username);
	//		}

	//		throw new HttpResponseException(HttpStatusCode.Unauthorized);
	//	}

	//	public bool CheckUser(string username, string password)
	//	{
	//		// should check in the database
	//		return true;
	//	}
	//}
}
