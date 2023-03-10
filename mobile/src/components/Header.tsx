import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
        activeOpacity={0.7}
      >
        <Feather name="plus" color={colors.violet[500]} size={24} />

        <Text className="text-white ml-3 font-semibold">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}