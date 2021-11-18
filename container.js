const { exec } = require("child_process");
const [, , ...args] = process.argv;

const main = () => {
  switch (args[0]) {
    case "run":
      run();
      break;

    case "child":
      child();
      break;

    default:
      console.log("Nothing...");
      break;
  }
};

const run = async () => {
  const { err, stdout, stderr } = await exec("/proc/self/exe");

  console.log({ stdout, stderr });

  if (err) {
    console.error({ err });
    return;
  }

  // the *entire* stdout and stderr (buffered)
  //   console.log(`stdout: ${stdout}`);
  //   console.log(`stderr: ${stderr}`);
};

child = () => {
  console.log("Child ");
};

main();
