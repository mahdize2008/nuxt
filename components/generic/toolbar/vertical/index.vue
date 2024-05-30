<template>
    <ul>
        <li class="mb-2 last:mb-0">
            <GenericToolbarVerticalButton title="صفحه اصلی" iconName="gamepad" :iconPathCount="4" active/>
        </li>
        <li class="mb-2 last:mb-0">
            <GenericToolbarVerticalButton title="بازی" iconName="gamepad" :iconPathCount="4"/>
        </li>
        <li class="mb-2 last:mb-0">
            <GenericToolbarVerticalButton title="برنامه" iconName="gamepad" :iconPathCount="4"/>
        </li>
        <li class="mb-2 last:mb-0">
            <GenericToolbarVerticalButton title="کودک" iconName="gamepad" :iconPathCount="4"/>
        </li>
        <li class="mb-2 last:mb-0">
            <GenericToolbarVerticalButton iconName="gamepad" isMore :iconPathCount="4"/>
        </li>
    </ul>
</template>