/// <reference types="react" />
declare type Props = {
    color?: string;
    text: string;
    type: 'strong' | 'p' | 'span';
};
export declare const Text: ({ color, text, type }: Props) => JSX.Element;
export {};
