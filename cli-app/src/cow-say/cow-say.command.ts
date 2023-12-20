import * as readline from 'readline';
import { Command, CommandRunner } from 'nest-commander';
import * as cowsay from 'cowsay';

@Command({
  name: 'cowsay',
  options: {
    isDefault: true,
  },
})
export class CowSayCommand extends CommandRunner {

  rd: readline.Interface

  constructor() {
    super()
    const rd = readline.createInterface({
      input: process.stdin, 
      output: process.stdout,
    });

    this.processInput = this.processInput.bind(this);

    rd.on('line', this.processInput);
    rd.on('close', this.exitTerminal);
    this.rd = rd;
  }

  processInput(input: any) {
    if (input == 'exit') {
      this.rd.close();
      return
    }
    console.log(cowsay.say({ text: input}));
  }

  exitTerminal() {
    console.log('Thank you for using cowsay!')
  }

  async run(): Promise<void> {
    console.log(cowsay.say({ text: 'Welcome to Cow say!' }));
  }
}