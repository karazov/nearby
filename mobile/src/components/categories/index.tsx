import { FlatList } from "react-native";
import { Category } from "./category/index.";

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    data: CategoriesProps
}

export function Categories({data}: Props){
    return (
        <FlatList />
    )
}