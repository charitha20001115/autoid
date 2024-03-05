namespace idcheck;

entity college {

    key ID:UUID; //@Core.Computed:true;
    collid:Integer @readonly;
    collname:String;
    date:Date @assert.range: ['2024-01-01', '2024-03-01'];
    // date: Date @assert.format: 'YYYY-MM-DD';
    colltype:String @assert.range enum { eng; medical; }  
}