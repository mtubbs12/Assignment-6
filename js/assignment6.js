function CreateCustomer()

{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect Customer data from web page
    var customerid=document.getElementById("custid").value;
    var customername=document.getElementById("custname").value;
    var customercity=document.getElementById("custcity").value;
    
    //Create the parameter string
    var newcustomer='{"CustomerID":"' +customerid + '","CompanyName":"' +customername+'","CustomerCity":"' + customercity+ '"}';
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState ==4 && objRequest.status==200)
        {
            var result=JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

//Show in result1 area if the function was successful or not successful
function OperationResult(output)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result1").innerHTML="The operation was successful!"
    }
    else
    {
        document.getElementById("result1").innerHTML="The operation was not successful!"+"<br>"+output.Exception;
    }
}
//Show or hide the areas depending on which one you select from the dropdown menu
function MenuChoice()
{
    if (document.getElementById("menu").value == "Create Customer")
    {
        document.getElementById("area1").style.visibility = "visible";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Update Shipping Info")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "visible";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "visibile";
    }
}

function updateOrderAddress()
{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    //Collect New updated shipping info from section 2 of webpage
    var ordernumber=document.getElementById("ordnumber").value;
    var shippingname=document.getElementById("shipname").value;
    var shippingaddress=document.getElementById("shipaddress").value;
    var shippingcity=document.getElementById("shipcity").value;
    var shippingcoding=document.getElementById("shipcode").value;
    
    
    //Create the parameter string
    var shipping='{"OrderNumber":"' +ordernumber + '","Ship-to Name":"' +shippingname+'","Ship-to Street Address":"' + shippingaddress+ '","Ship-to City:"' +shippingcity +'","Ship-to Postal Code:"' +shippingcode +'"}';
    
   //Checking for AJAx operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState == 4 && objRequest.status==200)
        {
            var result=JSON.parse(objRequest.responseText);
            Shipresult(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(shipping);
}


function Shipresult(output)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result2").innerHTML="The Shipping address has been updated!"
    }
    else
    {
        document.getElementById("result2").innerHTML="The Shipping address failed to update!"+"<br>"+output.Exception;
    }
}
function deleteCustomer()
{
    var x;
    if (confirm("Are you sure you want to delete the customer?") == true)
    {
        x = "Customer has been deleted!";
    }
    else
    {
        x = "Customer has not been deleted!";
    }
    document.getElementById("result3").innerHTML = x;
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateResult(output);
        }
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateResult (result)
{
    if (output.WasSuccessful== 1)
    {
        document.getElementById("result3").innerHTML="Customer has been deleted!"
    }
    else
    {
        document.getElementById("result3").innerHTML="Customer has not been deleted!"+"<br>"+output.Exception;
    }
}
 

 
