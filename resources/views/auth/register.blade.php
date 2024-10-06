@extends('layouts.app')

@section('content')
<div id="register-app"></div>
@endsection

@push('scripts')
<script>
    const app = document.getElementById('register-app');
    ReactDOM.render(<RegisterView />, app);
</script>
@endpush