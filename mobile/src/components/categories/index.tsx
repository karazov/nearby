import { FlatList } from "react-native";
import { Category } from "./category/index.";

import { s } from "./styles";

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    data: CategoriesProps
    selected: string
    onSelect: (id: string) => void
}

export function Categories({data, selected, onSelect}: Props){
    return (
        <FlatList 
            style={s.container}
            contentContainerStyle={s.content}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Category name={item.name} 
            iconId={item.id} onPress={() => 
            onSelect(item.id)}
            isSelected={item.id === selected} />}
        />
    )
}