@extends('layouts.app')

@section('content')
<div id="transport-search-app"></div>
@endsection

@push('scripts')
<script>
    const app = document.getElementById('transport-search-app');
    ReactDOM.render(<TransportSearchInterface />, app);
</script>
@endpush