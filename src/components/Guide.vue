<template>
  <div class="h-screen py-4 bg-gray-50">
    <h1 class="mb-8 text-3xl font-black text-center">Guide</h1>

    <Suspense>
      <template #default>
        <Card />
      </template>
      <template #fallback>
        <CardSkeleton />
      </template>
    </Suspense>
  </div>
</template>
