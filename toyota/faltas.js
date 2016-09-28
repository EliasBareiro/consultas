$( document ).ready(function() {
  function faltas(id_curso){
	 $.ajax({
		type: 'GET',
		url: 'http://colegio.paparelli.com.ar/faltas/'+curso_id,
		dataType : 'json',
		success: function(data){
			var faltas = $('#faltas');
			item = ''
			$.each(data.results, function(i, materia){
				item += '<tr>'+
					'<td>'+materia.nombre+'</td>'+
					'</tr>';
      });
		faltas.html(item);

     },
     error: function (response, status, error) {
       console.log(response);
     }
 });
}  
  $.ajax({
    type: 'GET',
//    url: 'http://127.0.0.1:8000/cursos',
    url: 'http://colegio.paparelli.com.ar//faltas',
    dataType : 'json',
    success: function(data){
      var faltas = $('#faltas');
      item = ''
      $.each(data.results, function(i, field){
        item += '<option value='+field.id+' href="#" class="list-group-item">'+field.alumno+
          ' ('+ field.fecha + ' ) '+
          '</option>';
      });
     faltas.html(item);
	 
	 //onchange tenes el id de curso
	 //windows.href = 'http://colegio.paparelli.com.ar/horarios/' + id
	 // localStorage.set('curso', id)
     },
     error: function (response, status, error) {
       console.log(response);
     }
 });

})
