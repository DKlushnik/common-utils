
export interface IValueModel<TValue> {
    value: TValue;
}

export interface ILabel<T> {
    readonly label: T;
}

export interface IResetableModel {
    readonly reset: () => void;
    readonly isDefault?: boolean;
}

export interface ICountableModel {
    readonly count: number;
    readonly selectedCount?: number;
    readonly isEmpty: boolean;
}
