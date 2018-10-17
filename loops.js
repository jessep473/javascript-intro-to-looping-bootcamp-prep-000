function countdown(num) {
  for (i = 0; i < num; i++ ) 
    if (i === 0) {
      console.log('Im Done');
    }
    else {
      console.log('Counted' + i + 'times');
    }
}