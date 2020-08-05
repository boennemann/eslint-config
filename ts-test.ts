export function test(a: any, input?: {foo: string}): string {
  // @ts-expect-error
  console.log(input.swag)
  return input.foo + ''
}
