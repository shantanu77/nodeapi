if kong.request.get_method() ~= "POST" then
    return 
  end
  
  local body, err, mimetype = kong.request.get_body()
  if (body == nil) then
    return 
  end 
  kong.log.info(">>>>>>>>>>>>>> received body: ", body.template_name)
  
  local mobile = "919911408535"
  
  if kong.request.get_query_arg("whatsappNumber")~=nil then
    mobile = kong.request.get_query_arg("whatsappNumber")
  end
  local transformedBody = 
  {
      to = mobile,
      type = "template",
      template = {
        namespace = "88fa8697_9516_4aca_9d5d_12a236547604",
        name = body.template_name,
        language = {
          policy = "deterministic",
          code = "en_US"
        },
        components = {
          {
            type = "body",
            parameters = {}
          }
        }
      }
  }
    kong.log.info(">>>>>>>>>>>>>>>>>>>Now setting tranformed body to system, TRANSFORMER IS ",transformedBody )
  
    for i, parameter in ipairs(body.parameters) do
      table.insert(transformedBody.template.components[1].parameters, {
        type = "text",
        text = parameter.value
      })
    end
    kong.service.request.set_body(transformedBody,"application/json")
  