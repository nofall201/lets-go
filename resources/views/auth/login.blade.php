@extends('layouts.app')

@section('content')
<div id="login-app"></div>
@endsection

@push('scripts')
<script>
    const app = document.getElementById('login-app');
    ReactDOM.render(<LoginView />, app);
</script>
@endpush