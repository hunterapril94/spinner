  let timer = 0
  let spinner = "|/-\\|"
  for(const char of spinner) {
    setTimeout(() => {
      if(char === "\\") {
      process.stdout.write('\r\\    ')
    }
    else {
      process.stdout.write(`\r${char}\    `)
    }}, (100+timer))
    timer += 200
  }


