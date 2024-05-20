import storage from "../models/storage";

export namespace Compontent {
  export namespace List {
    type Columns = Array<Column>;

    type Column = {
      /** 
       * Human readable label of the column.
       */
      label: string,
      /** 
       * Identifier used by the software.
       */
      value: string,
      /**
       * Whether the column can be asc / desc sorted.
       */
      sortable: boolean,
    }

    type ActiveColumns = Array<string>;

    type Rows = Array<>;
  }
}
