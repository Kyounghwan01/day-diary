const TestStore = () => ({
  count: 1,
  setCount(value: number) {
    this.count = value;
  },
});
export type testStoreType = ReturnType<typeof TestStore>;

export default TestStore;
