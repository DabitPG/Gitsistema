var http_request=false;
function makeRequest(url){
    http_request=false;
    if (window.XMLHttpRequest){
        http_request=new XMLHttpRequest();
        if(http_request.overrideMimeType){
            http_request.overrideMimeType('text/xml');  
        }
        else if(window.ActiveXObject){
            try{http_request=new ActiveXObject("Msxml2.XMLHTTP");}
            catch(e){
                try{http_request=new ActiveXObject("Microsoft.XMLHTTP");}
                catch(e){}

            }
        }
        if(!http_request){
            alert('falla :(no es posible crear una instancia XMLHTTP');
            return false;
        }
        http_request.onreadystatechange = alertContents;
        http_request.open('GET', url, true);
        http_request.send();
    }
    function alertContents(){
        if (http_request.readyState ==4){
            if (http_request.Status == 200){
                var div =document.getElementsById("contenidoAjax");
                div.innerHTML = http_re .responseText;

                var dato = document.getElement  ('tarea').value;
                console.log(dato);

                varelem = document.getElementById('container');
                elem.inneerHTML += '<tr><td>1</td><td>'+dato+'</td></tr>';
                
            }
            else {alert('hubo problemas con la petición .');}
        }

    }
}