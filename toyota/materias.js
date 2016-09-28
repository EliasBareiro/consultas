$( document ).ready(function() {
  function materias(id_curso){
	 $.ajax({
		type: 'GET',
		url: 'http://colegio.paparelli.com.ar/materias'+curso_id,
		dataType : 'json',
		success: function(data){
			var materias = $('#materias');
			item = ''
			$.each(data.results, function(i, materia){
				item += '<tr>'+
					'<td>'+materia.nombre+'</td>'+
					'</tr>';
      });
		materias.html(item);

     },
     error: function (response, status, error) {
       console.log(response);
     }
 });
}  
  $.ajax({
    type: 'GET',
//    url: 'http://127.0.0.1:8000/cursos',
    url: 'http://colegio.paparelli.com.ar/materias',
    dataType : 'json',
    success: function(data){
      var materias = $('#materias');
      item = ''
      $.each(data.results, function(i, field){
        item += '<option value='+field.id+' href="#" class="list-group-item">'+field.nombre+
          ' ('+ field.anio_cursada + ' ) '+
          '</option>';
      });
     materias.html(item);
	 
	 //onchange tenes el id de curso
	 //windows.href = 'http://colegio.paparelli.com.ar/horarios/' + id
	 // localStorage.set('curso', id)
     },
     error: function (response, status, error) {
       console.log(response);
     }
 });

})
