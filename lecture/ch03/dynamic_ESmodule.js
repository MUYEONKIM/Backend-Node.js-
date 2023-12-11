const a = true;

if (a) {
  const m1 = await import("./ESmodule.js");
  console.log(m1)
}