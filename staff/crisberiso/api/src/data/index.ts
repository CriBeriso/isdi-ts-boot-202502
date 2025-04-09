import { connect, disconnect } from "mongoose";

const data = {
  connect(uri: string, dbName: string) {
    return connect(`${uri}/${dbName}`);
  },
  disconnect(): Promise<void> {
    return disconnect();
  },
};

export { data };