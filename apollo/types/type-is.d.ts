declare module 'type-is' {
    export default function typeis(request: any, types: Array<string>): string | null | false;

    export function hasBody(request: any): boolean;

    export function is(mediaType: string, types: Array<string>): string | false;
}