<script lang="ts" setup>
let {placeholder,color,iconName,iconPathCount,hasOutline}=defineProps({
  placeholder:{
    type:String,
    default:''
  },
  color:{
    type:String,
    default:'white'
  },
  iconName:{
    type:String,
    default:''
  },
  iconPathCount:{
    type:Number,
    default:0
  },
  hasOutline:{
    type:Boolean,
    default:false
  }
})

function setColor(){
  return `input-wrapper-${color}`
}

</script>

<template>
  <div class="input-wrapper w-[250px]" :class="[{'input-wrapper-outline':hasOutline},setColor()]">
    <input type="text" class="input grow" :placeholder="placeholder">
    <GenericBtn :color="color==='black' ? 'white' : 'transparent'" :btnText="color==='black'" :iconName="iconName" :iconPathCount="iconPathCount" :rounded="true" :square="true"/>
  </div>
</template>

<style>
.input-wrapper{
  @apply flex items-center bg-white rounded-sm overflow-hidden border-black
}
.input{
  @apply bg-transparent h-10 outline-none px-4 text-xs-plus text-black
}

.input-wrapper-black{
  @apply bg-black border-white
}
.input-wrapper-black .input{
  @apply text-white
}

.input-wrapper.input-wrapper-outline{
  @apply !bg-transparent border-2
}


</style>